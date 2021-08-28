using Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public record ListItem : AuditableEntity
    {
        public Product? Product { get; init; }
        public int Quantity { get; init; }
    }
}
