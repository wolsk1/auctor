namespace VolskNet.Auctor
{
    using System;

    internal class Lecturer
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Degree { get; set; }
        public Guid DepartmentId { get; set; }
    }
}