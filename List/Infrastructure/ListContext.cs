using Domain.Aggregates.ListAggregates;
using Domain.SeedWork;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Infrastructure
{
    public class ListContext : DbContext, IUnitOfWork
    {


        public DbSet<List> Lists { get; set; }
        public DbSet<ListItem> ListItems { get; set; }

        public DbSet<ListOwner> ListOwners { get; set; }

        public ListContext(DbContextOptions<ListContext> options)
            : base(options)
        {

        }

        public async Task<bool> SaveEntitiesAsync(CancellationToken cancellationToken = default)
        {
            var result = await base.SaveChangesAsync(cancellationToken);
            return true;
        }
    }
}
