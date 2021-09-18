using Domain.Exceptions;
using Domain.SeedWork;
using System;

namespace Domain.Aggregates.ListAggregates
{
    public class ListItem : AuditableEntity
    {
        private Guid _productId;
        private string _productName;
        private int _units;
        private decimal _unitPrice;

        public Guid ProductId { get; private set; }

        protected ListItem()
        {
        }

        public ListItem(Guid productId, string productName, decimal unitPrice, int units = 1)
        {
            _productId = productId;
            _productName = productName;
            _unitPrice = unitPrice; 
        }

        public Guid GetProductId() => _productId;
        public string GetProductName() => _productName;
        public int GetUnits() => _units;
        public decimal GetUnitPrice() => _unitPrice;

        public void AddUnits( int units)
        {
            if(units < 0)
            {
                throw new ListDomainException("Invalid units");
            }
            _units += units;
        }
    }
}
