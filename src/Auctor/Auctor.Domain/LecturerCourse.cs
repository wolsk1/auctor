namespace VolskNet.Auctor.Domain
{
    using System;

    internal class LecturerCourse
    {
        public Guid Id { get; set; }
        public Guid CourseId { get; set; }
        public Guid LecturerId { get; set; }
    }
}