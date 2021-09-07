using Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Aggregates.ListAggregates
{
    public class Product : AuditableEntity
    {
        private string _name;
        private string _category;
        private decimal _price;


    }
}
