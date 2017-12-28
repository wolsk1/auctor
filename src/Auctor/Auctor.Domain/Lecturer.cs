namespace VolskNet.Auctor.Domain
{
    using System;

    public class Lecturer
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Degree { get; set; }
        public Guid DepartmentId { get; set; }
    }
}