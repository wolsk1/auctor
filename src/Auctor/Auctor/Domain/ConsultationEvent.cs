namespace VolskNet.Auctor
{
    using System;

    public class ConsultationEvent
    {
        public Guid Id { get; set; }
        public string Name { get; set; }        
        public int Value { get; set; }
        public Guid CourseId { get; set; }
    }
}