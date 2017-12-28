namespace VolskNet.Auctor.Domain
{
    using System;

    public class ConsultationEventView
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime ValidFrom { get; set; }
        public DateTime ValidTill { get; set; }
        public int Value { get; set; }        
        public bool NeedLecturer { get; set; }
        public Course Course { get; set; }
        public Lecturer Lecturer { get; set; }
    }
}