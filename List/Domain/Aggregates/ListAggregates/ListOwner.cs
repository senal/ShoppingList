using Domain.Common;

namespace Domain.Aggregates.ListAggregates
{
    public class ListOwner : AuditableEntity
    {
        private string _firstName;
        private string _lastName;
    }
}
