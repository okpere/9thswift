import DocumentationHeader from '@/app/developer/_components/DocumentationHeader';
import DocumentationContent from '@/app/developer/_components/DocumentationContent';

export default function DeveloperPage() {
  return (
    <main className='min-h-screen bg-white overflow-x-hidden'>
      <DocumentationHeader />
      <DocumentationContent />
    </main>
  );
}
