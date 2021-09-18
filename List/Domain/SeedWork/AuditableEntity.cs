using System;

namespace Domain.Common
{
    public class AuditableEntity : Entity
    {
        public DateTime Created { get; init; }

        public string? CreatedBy { get; init; }

        public DateTime? LastModified { get; init; }

        public string? LastModifiedBy { get; init; }
    }
}
