namespace VolskNet.Auctor
{
    using System;

    public class Room
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Guid DepartmentId { get; set; }
    }
}