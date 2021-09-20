using Domain.SeedWork;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Domain.Aggregates.ListAggregates
{
    public class List : AuditableEntity, IAggregateRoot
    {
        private string _name;
        private DateTime _closgingDate;
        private Guid _shopId;
        private Guid _owenerId;

        private readonly List<ListItem> _listItems;
        public IReadOnlyCollection<ListItem> ListItems => _listItems;

        public ListStatus ListStatus { get; private set; }
        private int _listStatusId;

        protected List()
        {
            _listStatusId = ListStatus.Draft.Id;
            _listItems = new List<ListItem>();
        }

        public ListOwner ListOwner { get; private set; }

        public Shop Shop { get; private set; }


        /// <summary>
        /// Initilise an order with required properties
        /// </summary>
        /// <param name="name"></param>
        /// <param name="closingDate"></param>
        /// <param name="shopId"></param>
        /// <param name="ownerId"></param>
        public List(string name, DateTime closingDate, Guid shopId, Guid ownerId)
        {
            _name = name;
            _closgingDate = closingDate;
            _shopId = shopId;
            _owenerId = ownerId;

            // TODO: Think about whether we need any domain events when creating a list
            
        }

        public void AddListItem (Guid productId, string productName, decimal unitPrice, int units = 1)
        {
            var existingProduct = _listItems.SingleOrDefault(i => i.ProductId == productId);
            if(existingProduct != null)
            {
                existingProduct.AddUnits(units);
            }
            else
            {
                var listItem = new ListItem(productId, productName, unitPrice, units);
                _listItems.Add(listItem);
            }
        }

        public decimal GetTotal ()
        {
            return _listItems.Sum(i => i.GetUnitPrice() * i.GetUnits());
        }

    }
}
