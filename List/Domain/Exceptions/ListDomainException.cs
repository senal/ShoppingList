using System;
using System.Runtime.Serialization;

namespace Domain.Exceptions
{
    [Serializable]
    public class ListDomainException : Exception
    {
        public ListDomainException()
        {
        }

        public ListDomainException(string? message) : base(message)
        {
        }

        public ListDomainException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected ListDomainException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
