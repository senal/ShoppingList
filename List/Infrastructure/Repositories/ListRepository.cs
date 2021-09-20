using Domain.Aggregates.ListAggregates;
using Domain.SeedWork;
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class ListRepository : IListRepository
    {

        private readonly ListContext _context;
        public ListRepository(ListContext context)
        {
            _context = context;
        }

        public IUnitOfWork UnitOfWork => _context;

        public List Add(List list)
        {
            return _context.Lists.Add(list).Entity;
        }

        public async Task<List> GetAsync(Guid listId)
        {
            var list = await _context
                            .Lists
                            .Include(x => x.ListOwner)
                            .Include(x => x.Shop)
                            .FirstOrDefaultAsync(x => x.Id == listId);

            if( list != null)
            {
                await _context.Entry(list)
                    .Collection(x => x.ListItems).LoadAsync();
                await _context.Entry(list)
                    .Reference(x => x.ListStatus).LoadAsync();
            }

            return list;
        }


        public void Update(List list)
        {
            _context.Entry(list).State = EntityState.Modified;
        }
    }
}
