using Domain.Common;
using System;

namespace Domain.Aggregates.ListAggregates
{
    public class List : AuditableEntity
    {
        private string _name;
        private DateTime _closgingDate;
        private Guid _shopId;
        private Guid _owenerId;

    }
}
