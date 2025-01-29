const StatusInfo = ({ status }) => {
    
    let bgColor, text;
    switch (status) {
        case 'booked':
            bgColor = 'bg-orange-600';
            text = 'Booked';
            break;
        case 'paid':
            bgColor = 'bg-green-500';
            text = 'Paid';
            break;
        case 'canceled':
            bgColor = 'bg-red-600';
            text = 'Canceled';
            break;
        default:
            bgColor = 'bg-gray-400';
            text = 'Unknown';
    }

    return (
        <div className={`rounded-full p-1 text-xs ${bgColor} text-white`}>
            {text}
        </div>
    );
};

export default StatusInfo;
