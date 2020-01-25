import React from 'react';
import cx from 'classnames'

interface ExperinceProps {
  className: string
  data: {
    link: string
    alt: string
    resource: string
    company: string
    role: string
    dates: string
    location: string
  }
}

const Experince: React.FC<ExperinceProps> = ({
  className,
  data,
}) => {
  const cxs = cx(
    className,
    'page-experinces__job',
  );

  return (
    <aside className={cxs}>
      <figure>
        <img
          src={data.resource}
          width={50}
          height={50}
          alt={data.alt}
          className="page-experinces__logo"
        />
      </figure>
      <div className="page-experinces__detail">
        <h2 className="page-experinces__role">
          {data.role}
        </h2>
        <p className="page-experinces__company-name">
          {data.company}
        </p>
        <p className="page-experinces__location">
          {data.location}
        </p>
        <p className="page-experinces__dates">
          {data.dates}
        </p>
        <div className="page-experinces__link">
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-globe-asia" />
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Experince;
