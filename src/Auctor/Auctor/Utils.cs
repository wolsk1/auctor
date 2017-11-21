namespace VolskNet.Auctor
{
    using System;
    using System.Configuration;
    using System.Linq;

    public class Utils
    {
        /// <summary>
        /// Gets the property value.
        /// </summary>
        /// <param name="classObject">The class object.</param>
        /// <param name="propName">Name of the property.</param>
        /// <returns></returns>
        public static object GetPropertyValue(object classObject, string propName)
        {
            if (classObject == null)
            {
                throw new ArgumentNullException(nameof(classObject));
            }

            if (string.IsNullOrEmpty(propName))
            {
                throw new ArgumentNullException(nameof(propName));
            }

            var type = classObject.GetType();
            var propertyInfo = type.GetProperty(propName);

            return propertyInfo.GetValue(classObject);
        }

        /// <summary>
        /// To the pascal case.
        /// </summary>
        /// <param name="sourceString">The source string.</param>
        /// <returns></returns>
        public static string Capitalize(string sourceString)
        {
            if (sourceString == null)
            {
                return null;
            }

            if (sourceString.Length < 2)
            {
                return sourceString.ToUpper();
            }

            var words = sourceString.Split(
                new char[] { },
                StringSplitOptions.RemoveEmptyEntries);

            return words.Aggregate(string.Empty, (current, word) =>
            current + word.Substring(0, 1).ToUpper() + word.Substring(1));
        }

        public static T GetAppSettingsValue<T>(string key, T defultValue = default(T))
        {
            var value = ConfigurationManager.AppSettings[key];

            if (string.IsNullOrEmpty(value))
            {
                return defultValue;
            }

            try
            {
                return (T)Convert.ChangeType(value, typeof(T));
            }
            catch (Exception ex)
                when (ex is InvalidCastException
                      || ex is FormatException
                      || ex is OverflowException
                      || ex is ArgumentException)
            {
                return defultValue;
            }
        }

        public static T[] GetAppSettingsArrayValue<T>(string key)
        {
            var value = ConfigurationManager.AppSettings[key];

            if (string.IsNullOrEmpty(value))
            {
                return new T[0];
            }

            try
            {
                return value
                    .Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries)
                    .Select(s => (T)Convert.ChangeType(s, typeof(T)))
                    .ToArray();
            }
            catch (Exception ex)
                when (ex is InvalidCastException
                      || ex is FormatException
                      || ex is OverflowException
                      || ex is ArgumentException)
            {
                return new T[0];
            }
        }

    }
}