using Domain.SeedWork;
using System;
using System.Threading.Tasks;

namespace Domain.Aggregates.ListAggregates
{
    public interface IListRepository : IRepository<List>
    {
        List Add(List list);
        void Update(List list);
        Task<List> GetAsync(Guid listId);

        

    }
}
