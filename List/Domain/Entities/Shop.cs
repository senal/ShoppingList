using Domain.Common;
using System;

namespace Domain.Entities
{
    public record Shop : AuditableEntity
    {
        public Guid  Id { get; init; }
        public string? Name {  get; init; }
        public string? Suburb { get; init; }

        public decimal? Longitude { get; init; }
        public decimal? Latitude {  get; init; }
    }
}
