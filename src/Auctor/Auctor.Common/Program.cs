﻿using System;

namespace VolskNet.Auctor.Common
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            Console.Write(StringUtils.ToPascalCase("end_time", '_'));
            Console.Read();
        }
    }

}

