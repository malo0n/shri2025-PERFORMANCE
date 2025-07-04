import { useRef, useEffect } from "react";
import "./Event.css";
import temp from "../../../public/icon_temperature.svg";
import temp2 from "../../../public/icon_temperature_2.svg";
import light from "../../../public/icon_sun.svg";
import light2 from "../../../public/icon_sun_2.svg";
import schedule from "../../../public/icon_scheduled.svg";
interface EventProps {
  icon: string;
  iconLabel: string;
  title: string;
  subtitle?: string;
  slim?: boolean;
  onSize?: (size: {
    width: number | undefined;
    height: number | undefined;
  }) => void;
}

function handleIcon(icon: string) {
  switch (icon) {
    case "temp":
      return temp.src;
    case "temp2":
      return temp2.src;
    case "light":
      return light.src;
    case "light2":
      return light2.src;
    case "schedule":
      return schedule.src;
  }
}

export function Event(props: EventProps) {
  const ref = useRef<HTMLLIElement | null>(null);

  const { onSize } = props;

  useEffect(() => {
    const width = ref.current?.offsetWidth;
    const height = ref.current?.offsetHeight;
    if (onSize) {
      onSize({ width, height });
    }
  });

  return (
    <li ref={ref} className={"event" + (props.slim ? " event_slim" : "")}>
      <button className="event__button">
        <span
          className={`event__icon`}
          style={{ backgroundImage: `url(${handleIcon(props.icon)})` }}
          role="img"
          aria-label={props.iconLabel}
        ></span>
        <h4 className="event__title">{props.title}</h4>
        {props.subtitle && (
          <span className="event__subtitle">{props.subtitle}</span>
        )}
      </button>
    </li>
  );
}
