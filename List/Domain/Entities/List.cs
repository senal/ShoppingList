using Domain.Common;
using System;
using System.Collections.Generic;

namespace Domain.Entities
{
    public record List : AuditableEntity
    {
        public Guid Id { get; init; }
        public string? Name {  get; init; }
        public string? Description {  get; init; }
        public IEnumerable<ListItem>? Items {  get; init; }
        public Shop? Shop { get; init; }
    } 
    


}
