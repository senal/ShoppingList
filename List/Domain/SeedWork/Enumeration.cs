using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;

namespace Domain.SeedWork
{
    public abstract class Enumeration : IComparable
    {

        public int Id { get; private set; }
        public string Name {  get; private set; }

        public Enumeration(int id, string name) => (Id, Name) = (id, name);


        public override string ToString() => Name;


        public static IEnumerable<T> GetALl<T>() where T : Enumeration =>
            typeof(T).GetFields(
                BindingFlags.Public |
                BindingFlags.Static |
                BindingFlags.DeclaredOnly)
                .Select(x => x.GetValue(null))
                .Cast<T>();

        public override bool Equals(object obj)
        {
            if (obj is not Enumeration otherValue) return false;

            var typeMatch = GetType().Equals(obj.GetType());
            var valueMatch = Id.Equals(otherValue.Id);
            return typeMatch == valueMatch;
        }

        public override int GetHashCode() => Id.GetHashCode();
        public int CompareTo(object obj) => Id.CompareTo(((Enumeration)obj).Id);

        public static int AbsoluteDifference(Enumeration firstValue, Enumeration secondValue)
        {
            var absoluteDifference = Math.Abs(firstValue.Id - secondValue.Id);
            return absoluteDifference;
        }

        public static T FromValue<T>(int value) where T: Enumeration
        {
            var matchingItem = Parse<T, int>(value, "value", item => item.Id == value);
            return matchingItem;
        }
        public static T FromDescription<T>(string displayName) where T: Enumeration
        {
            var matchingItem = Parse<T, string>(displayName, "display name", item => item.Name == displayName);
            return matchingItem;
        }


        private static T Parse<T, K>(K value, string description, Func<T, bool> predicate) where T: Enumeration
        {
            var matchingItem = GetALl<T>().FirstOrDefault(predicate);
            if (matchingItem == null) throw new InvalidOperationException($"'{value}' is not a valid {description} in {typeof(T)}");
            return matchingItem;
        }

    }
}
