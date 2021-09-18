using System;

namespace Domain.SeedWork
{
    public class AuditableEntity : Entity
    {
        public DateTime Created { get; init; }

        public string? CreatedBy { get; init; }

        public DateTime? LastModified { get; init; }

        public string? LastModifiedBy { get; init; }
    }
}
