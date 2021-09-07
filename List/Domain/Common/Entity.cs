using System;

namespace Domain.Common
{
    public abstract class Entity
    {

        Guid _Id;
        public virtual Guid Id
        {
            get
            {
                return _Id;
            }
            protected set
            {
                _Id = value;
            }
        }
    }
}
