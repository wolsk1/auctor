namespace VolskNet.Auctor.Domain
{
    using System;

    public class Room
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Capacity { get; set; }
        public Guid DepartmentId { get; set; }
    }
}