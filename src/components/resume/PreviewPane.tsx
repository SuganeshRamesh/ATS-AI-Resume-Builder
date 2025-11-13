import React from 'react';
const templateStyles = [
// Professional template
{
  container: 'bg-white font-serif',
  header: 'border-b-2 border-gray-800 pb-2 mb-4',
  name: 'text-2xl font-bold text-gray-800',
  contactInfo: 'text-sm text-gray-600 flex flex-wrap gap-2',
  sectionHeading: 'text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2',
  jobTitle: 'font-bold',
  companyName: 'font-medium',
  dates: 'text-sm text-gray-600 italic'
},
// Modern template
{
  container: 'bg-white font-sans',
  header: 'bg-blue-700 text-white p-4 mb-4',
  name: 'text-3xl font-bold',
  contactInfo: 'text-sm mt-1 flex flex-wrap gap-3',
  sectionHeading: 'text-blue-700 text-lg font-bold uppercase mb-2',
  jobTitle: 'font-bold text-gray-800',
  companyName: 'font-medium text-blue-600',
  dates: 'text-sm text-gray-600'
},
// Academic template
{
  container: 'bg-white font-serif',
  header: 'text-center border-b-2 border-gray-400 pb-3 mb-4',
  name: 'text-2xl font-bold text-gray-900',
  contactInfo: 'text-sm text-gray-700 mt-1 flex justify-center flex-wrap gap-2',
  sectionHeading: 'text-lg font-bold text-gray-900 mb-2 mt-4',
  jobTitle: 'font-bold',
  companyName: 'font-medium italic',
  dates: 'text-sm text-gray-700'
}];
export function PreviewPane({
  resumeData,
  templateId
}: {
  resumeData: any;
  templateId: number;
}) {
  if (!resumeData) return null;
  const style = templateStyles[templateId];
  return <div className="border rounded-lg overflow-hidden shadow-sm">
      <div className="bg-gray-100 border-b p-2 flex justify-between items-center">
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-xs text-gray-500">Resume Preview</span>
        <div></div>
      </div>
      <div className="h-[400px] overflow-auto p-4 text-sm">
        <div className={style.container}>
          {/* Header */}
          <header className={style.header}>
            <h1 className={style.name}>
              {resumeData.personalInfo?.name || 'Full Name'}
            </h1>
            <div className={style.contactInfo}>
              {resumeData.personalInfo?.email && <span>{resumeData.personalInfo.email}</span>}
              {resumeData.personalInfo?.phone && <span>• {resumeData.personalInfo.phone}</span>}
              {resumeData.personalInfo?.location && <span>• {resumeData.personalInfo.location}</span>}
              {resumeData.personalInfo?.linkedin && <span>• {resumeData.personalInfo.linkedin}</span>}
            </div>
          </header>
          {/* Work Experience */}
          {resumeData.workExperience && resumeData.workExperience.length > 0 && <section className="mb-4">
                <h2 className={style.sectionHeading}>Work Experience</h2>
                {resumeData.workExperience.map((job: any, index: number) => <div key={index} className="mb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className={style.jobTitle}>{job.position}</span>
                        {job.company && <span>
                            ,{' '}
                            <span className={style.companyName}>
                              {job.company}
                            </span>
                          </span>}
                        {job.location && <span> - {job.location}</span>}
                      </div>
                      <span className={style.dates}>
                        {job.startDate && job.startDate.substring(0, 7)}
                        {job.endDate ? ` - ${job.endDate.substring(0, 7)}` : job.current ? ' - Present' : ''}
                      </span>
                    </div>
                    {job.description && <p className="text-sm mt-1">{job.description}</p>}
                  </div>)}
              </section>}
          {/* Education */}
          {resumeData.education && resumeData.education.length > 0 && <section className="mb-4">
              <h2 className={style.sectionHeading}>Education</h2>
              {resumeData.education.map((edu: any, index: number) => <div key={index} className="mb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className={style.jobTitle}>{edu.degree}</span>
                      {edu.field && <span> in {edu.field}</span>}
                      {edu.institution && <span>
                          ,{' '}
                          <span className={style.companyName}>
                            {edu.institution}
                          </span>
                        </span>}
                    </div>
                    <span className={style.dates}>
                      {edu.startDate && edu.startDate.substring(0, 7)}
                      {edu.endDate && ` - ${edu.endDate.substring(0, 7)}`}
                    </span>
                  </div>
                  {edu.gpa && <p className="text-sm mt-1">GPA: {edu.gpa}</p>}
                </div>)}
            </section>}
          {/* Skills */}
          {resumeData.skills && resumeData.skills.filter((s: string) => s.trim()).length > 0 && <section className="mb-4">
                <h2 className={style.sectionHeading}>Skills</h2>
                <p>
                  {resumeData.skills.filter((skill: string) => skill.trim()).join(' • ')}
                </p>
              </section>}
          {/* Projects */}
          {resumeData.projects && resumeData.projects.length > 0 && <section className="mb-4">
              <h2 className={style.sectionHeading}>Projects</h2>
              {resumeData.projects.map((project: any, index: number) => <div key={index} className="mb-3">
                  <div className="flex justify-between items-start">
                    <span className={style.jobTitle}>{project.name}</span>
                    {project.technologies && <span className="text-sm text-gray-600">
                        {project.technologies}
                      </span>}
                  </div>
                  {project.description && <p className="text-sm mt-1">{project.description}</p>}
                  {project.link && <p className="text-sm text-blue-600 mt-1">{project.link}</p>}
                </div>)}
            </section>}
        </div>
      </div>
    </div>;
}