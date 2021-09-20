using Domain.Exceptions;
using Domain.SeedWork;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Domain.Aggregates.ListAggregates
{
    public class ListStatus : Enumeration
    {
        public static ListStatus Draft = new ListStatus(1, nameof(Draft).ToLowerInvariant());
        public static ListStatus InProgress = new ListStatus(2, nameof(InProgress).ToLowerInvariant());
        public static ListStatus Completed = new ListStatus(3, nameof(Completed).ToLowerInvariant());

        public ListStatus(int id, string name):
            base(id, name)
        {

        }

        public static IEnumerable<ListStatus> List() => new[] {Draft, InProgress, Completed};

        public static ListStatus FromName(string name)
        {
            var status =  List().SingleOrDefault(x => x.Name == name);
            if (status == null)
            {
                throw new ListDomainException($"Possible values for OrderStatus: {String.Join(",", List().Select(s => s.Name))}");
            }

            return status;
        }

        public static ListStatus From(int id)
        {
            var status = List().SingleOrDefault(x => x.Id == id);
            if(status == null)
            {
                throw new ListDomainException($"Possible values for OrderStatus: {String.Join(",", List().Select(s => s.Name))}");
            }
            return status;
        }   

    }
}
