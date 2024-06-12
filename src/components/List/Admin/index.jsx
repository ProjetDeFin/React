export default function ListAdmin({data}) {
    const snakeCase = (str) => {
        return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`).toLowerCase();
    };

    const getClassNames = (value) => {
        const baseClass = "tag";
        if (typeof value === 'string') {
          switch (value.toLowerCase()) {
            case 'active':
              return `${baseClass} active`;
            case 'cloture':
              return `${baseClass} cloture`;
            case 'stage':
              return `${baseClass} stage`;
            case 'alternance':
              return `${baseClass} alternance`;
            default:
              return "";
          }
        }
        return "";
    };

    return (
        <div className="content-table">
        {data.map((offer, index) => (
          <div key={index} className="row d-flex justify-start">
            {Object.entries(offer).map(([key, value]) => (
              <div key={key} className={snakeCase(key)}>
                <p className={getClassNames(value)}>{value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
}