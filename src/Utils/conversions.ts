/**
 * 
 * @param date 
 * 
 * @returns date string compatible with HTML date input.
 */
export const getHTMLDate = (date: Date | null): string => {
    const getMonthByIndex = (index: number): string => {
        return  `${index < 10 ? "0" : ""}${index + 1}`
    }

    const getDayByIndex = (index: number): string => {
        return  `${index < 10 ? "0" : ""}${index}`
    }

    if (date !== null) {
        return `${date.getFullYear()}-${getMonthByIndex(date.getMonth())}-${getDayByIndex(date.getDate())}`;
    } else {
        return "";
    }
}