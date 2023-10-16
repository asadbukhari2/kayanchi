export const CalendarProps = {
    date: new Date(),
    selectedColor: undefined,
    onPressDate: (d) => {},
    showMonth: undefined,
    shadow: undefined,
    language: undefined,
  };
  
  export const WeekItemProps = {
    date: new Date(),
    selectedDate: false,
    onSelectDate: (d) => {},
    selectedColor: undefined,
  };
  
  export const DefaultProps = {
    date: new Date(),
    selectedColor: undefined,
    onPressDate: (d) => {},
    showMonth: undefined,
    shadow: undefined,
  };
  
  export const CalendarHeaderProps = {
    language: undefined,
  };
  
  export const Language = ['ja', 'en', 'ko', 'es'];
  