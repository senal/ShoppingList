using Domain.SeedWork;

namespace Domain.Aggregates.ListAggregates
{
    public class Shop : AuditableEntity
    {
        private string _name;
        private string _suburb;
        private string _postCode;
    }
}
