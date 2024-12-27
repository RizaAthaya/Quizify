import { FC } from "react";
import { InformationCircleIcon, ExclamationCircleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { AlertProps } from "../../types/alert.types";

const Alert: FC<AlertProps> = ({ type = "info", title, children, ...props }) => {
  const typeStyles = {
    info: {
      container: "text-blue-800 border-blue-300 bg-blue-50",
      icon: <InformationCircleIcon className="w-5 h-5 text-blue-800" />,
    },
    error: {
      container: "text-red-800 border-red-300 bg-red-50",
      icon: <ExclamationCircleIcon className="w-5 h-5 text-red-800" />,
    },
    success: {
      container: "text-green-800 border-green-300 bg-green-50",
      icon: <CheckCircleIcon className="w-5 h-5 text-green-800" />,
    },
  };

  const { container, icon } = typeStyles[type] || typeStyles.info;

  return (
    <div
      className={`flex items-center p-4 mb-4 text-sm border rounded-lg lg:min-w-80 ${container}`}
      role="alert"
      {...props}
    >
      <div className="flex-shrink-0 mr-1">{icon}</div>
      <span className="sr-only">{type}</span>
      <div>
        {title && <span className="font-medium">{title}</span>} {children}
      </div>
    </div>
  );
};

export default Alert;
