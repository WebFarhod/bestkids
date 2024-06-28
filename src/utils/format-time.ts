import { format, getTime, formatDistanceToNow } from "date-fns";

const monthNames = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avgust",
  "sentabr",
  "oktabr",
  "noyabr",
  "dekabr",
];

export function fDateUz(date: string | Date): string {
  const d = new Date(date);
  const year = format(d, "yyyy");
  const month = monthNames[d.getMonth()];
  const day = format(d, "dd");
  const time = format(d, "HH:mm");

  return `${year} yil ${day}-${month}, soat ${time}`;
}

export function fDateUzMonth(date: string | Date): string {
  const d = new Date(date);
  const year = format(d, "yyyy");
  const month = monthNames[d.getMonth()];
  const day = format(d, "dd");

  return `${day} ${month} ${year}`;
}

export function fDate(date: string | Date, newFormat?: string): string {
  const fm = newFormat || "dd MMM yyyy";

  return date ? format(new Date(date), fm) : "";
}

export function fDateTime(date: Date, newFormat?: string) {
  const fm = newFormat || "dd MMM yyyy p";

  return date ? format(new Date(date), fm) : "";
}

export function fTimestamp(date: Date) {
  return date ? getTime(new Date(date)) : "";
}

// export function fToNow(date: Date) {
//   return date
//     ? formatDistanceToNow(new Date(date), {
//         addSuffix: true,
//       })
//     : "";
// }

const translations: { [key: string]: string } = {
  minute: "daqiqa",
  minutes: "daqiqa",
  hour: "soat",
  hours: "soat",
  day: "kun",
  days: "kun",
  month: "oy",
  months: "oy",
  year: "yil",
  years: "yil",
  ago: "oldin",
  in: "keyin",
  about: "taxminan", // Add translation for "about"
};

function translateToUzbek(text: string): string {
  return text
    .split(" ")
    .map((word) => translations[word] || word)
    .join(" ");
}

export function fToNow(date: Date | null | undefined): string {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return "";
  }

  const distance: string = formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });

  return translateToUzbek(distance);
}
