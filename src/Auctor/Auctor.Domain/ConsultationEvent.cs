namespace VolskNet.Auctor.Domain
{
    using System;

    public class ConsultationEvent
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime ValidFrom { get; set; }
        public DateTime ValidTill { get; set; }
        public int Value { get; set; }
        public Guid CourseId { get; set; }
        public Guid LecturerId { get; set; }
        public bool NeedLecturer { get; set; }
        public string CourseName { get; set; }
    }
}