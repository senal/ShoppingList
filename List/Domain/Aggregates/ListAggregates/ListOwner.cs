using Domain.Common;
using System;

namespace Domain.Aggregates.ListAggregates
{
    public class ListOwner : AuditableEntity
    {
        private Guid _id; // represents userId
        private string _firstName;
        private string _lastName;
    }
}
