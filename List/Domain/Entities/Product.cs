using Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public record Product : AuditableEntity
    {
        public Guid Id { get; init; }
        public string? Name { get; init; }
        public Guid CategoryId { get; init; }
        public string? Category  {  get; init; }
        public Guid BrandId { get; init; }
        public string? Brand {  get; init; }
        public decimal Price { get; init; }
    }
}
