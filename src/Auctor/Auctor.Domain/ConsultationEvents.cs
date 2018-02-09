namespace VolskNet.Auctor.Domain
{
    using System;

    public class ConsultationEvents
    {
        public Guid Id { get; set; }
        public Guid ConsultationId { get; set; }
        public Guid EventId { get; set; }
    }
}