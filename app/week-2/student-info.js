import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h1>Student Information</h1>
      <p><strong>Name:</strong> Your Name</p>
      <p>
        <strong>GitHub Repository:</strong>{' '}
        <Link href="https://github.com/Shawn-Graham/Cprg306" passHref>
          <a target="_blank" rel="noopener noreferrer">Visit My GitHub Repository</a>
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
