using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Common
{
    public record AuditableEntity
    {
        public DateTime Created { get; init; }

        public string? CreatedBy { get; init; }

        public DateTime? LastModified { get; init; }

        public string? LastModifiedBy { get; init; }
    }
}
