import React from 'react';

interface Props {
  className?: string;
}

export const Dashboard: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      Your component content here
    </div>
  );
};

export default Dashboard;