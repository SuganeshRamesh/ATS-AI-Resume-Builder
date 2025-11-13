import React from 'react';
import { useForm } from 'react-hook-form';
import { PlusIcon, TrashIcon } from 'lucide-react';
export function ResumeForm({
  onSubmit
}: {
  onSubmit: (data: any) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    watch,
    setValue
  } = useForm({
    defaultValues: {
      personalInfo: {
        name: '',
        email: '',
        phone: '',
        location: '',
        linkedin: ''
      },
      education: [{
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        gpa: ''
      }],
      skills: ['', '', ''],
      workExperience: [{
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      }],
      projects: [{
        name: '',
        description: '',
        technologies: '',
        link: ''
      }]
    }
  });
  const watchEducation = watch('education');
  const watchWorkExperience = watch('workExperience');
  const watchProjects = watch('projects');
  const watchSkills = watch('skills');
  const addEducation = () => {
    setValue('education', [...watchEducation, {
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: ''
    }]);
  };
  const removeEducation = (index: number) => {
    const newEducation = [...watchEducation];
    newEducation.splice(index, 1);
    setValue('education', newEducation);
  };
  const addWorkExperience = () => {
    setValue('workExperience', [...watchWorkExperience, {
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }]);
  };
  const removeWorkExperience = (index: number) => {
    const newWorkExperience = [...watchWorkExperience];
    newWorkExperience.splice(index, 1);
    setValue('workExperience', newWorkExperience);
  };
  const addProject = () => {
    setValue('projects', [...watchProjects, {
      name: '',
      description: '',
      technologies: '',
      link: ''
    }]);
  };
  const removeProject = (index: number) => {
    const newProjects = [...watchProjects];
    newProjects.splice(index, 1);
    setValue('projects', newProjects);
  };
  const addSkill = () => {
    setValue('skills', [...watchSkills, '']);
  };
  const removeSkill = (index: number) => {
    const newSkills = [...watchSkills];
    newSkills.splice(index, 1);
    setValue('skills', newSkills);
  };
  const onFormSubmit = (data: any) => {
    onSubmit(data);
  };
  return <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-8">
      {/* Personal Information */}
      <section>
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input {...register('personalInfo.name', {
            required: 'Name is required'
          })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
            {errors.personalInfo?.name && <p className="mt-1 text-xs text-red-600">
                {errors.personalInfo.name.message}
              </p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input {...register('personalInfo.email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john.doe@example.com" />
            {errors.personalInfo?.email && <p className="mt-1 text-xs text-red-600">
                {errors.personalInfo.email.message}
              </p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input {...register('personalInfo.phone')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(123) 456-7890" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input {...register('personalInfo.location')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="New York, NY" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              LinkedIn
            </label>
            <input {...register('personalInfo.linkedin')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="linkedin.com/in/johndoe" />
          </div>
        </div>
      </section>
      {/* Education */}
      <section>
        <h3 className="text-lg font-medium text-gray-800 mb-4">Education</h3>
        {watchEducation.map((education, index) => <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-md font-medium">Education #{index + 1}</h4>
              {watchEducation.length > 1 && <button type="button" onClick={() => removeEducation(index)} className="p-1 text-red-500 hover:bg-red-50 rounded-full">
                  <TrashIcon className="h-4 w-4" />
                </button>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Institution
                </label>
                <input {...register(`education.${index}.institution`, {
              required: 'Institution is required'
            })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="University of Example" />
                {errors.education?.[index]?.institution && <p className="mt-1 text-xs text-red-600">
                    {errors.education[index]?.institution?.message}
                  </p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Degree
                </label>
                <input {...register(`education.${index}.degree`, {
              required: 'Degree is required'
            })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Bachelor of Science" />
                {errors.education?.[index]?.degree && <p className="mt-1 text-xs text-red-600">
                    {errors.education[index]?.degree?.message}
                  </p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Field of Study
                </label>
                <input {...register(`education.${index}.field`)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Computer Science" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  GPA
                </label>
                <input {...register(`education.${index}.gpa`)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="3.8/4.0" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input type="month" {...register(`education.${index}.startDate`)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input type="month" {...register(`education.${index}.endDate`)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
          </div>)}
        <button type="button" onClick={addEducation} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
          <PlusIcon className="h-4 w-4 mr-1" /> Add Education
        </button>
      </section>
      {/* Skills */}
      <section>
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Skills & Certifications
        </h3>
        <div className="space-y-3">
          {watchSkills.map((skill, index) => <div key={index} className="flex items-center space-x-2">
              <input {...register(`skills.${index}`)} className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={`Skill ${index + 1} (e.g., JavaScript, Project Management)`} />
              {index > 2 && <button type="button" onClick={() => removeSkill(index)} className="p-1 text-red-500 hover:bg-red-50 rounded-full">
                  <TrashIcon className="h-4 w-4" />
                </button>}
            </div>)}
          <button type="button" onClick={addSkill} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
            <PlusIcon className="h-4 w-4 mr-1" /> Add Skill
          </button>
        </div>
      </section>
      {/* Work Experience */}
      <section>
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Work Experience
        </h3>
        {watchWorkExperience.map((experience, index) => <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-md font-medium">Experience #{index + 1}</h4>
              {watchWorkExperience.length > 1 && <button type="button" onClick={() => removeWorkExperience(index)} className="p-1 text-red-500 hover:bg-red-50 rounded-full">
                  <TrashIcon className="h-4 w-4" />
                </button>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input {...register(`workExperience.${index}.company`, {
              required: 'Company is required'
            })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Example Corp" />
                {errors.workExperience?.[index]?.company && <p className="mt-1 text-xs text-red-600">
                    {errors.workExperience[index]?.company?.message}
                  </p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Position
                </label>
                <input {...register(`workExperience.${index}.position`, {
              required: 'Position is required'
            })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Software Engineer" />
                {errors.workExperience?.[index]?.position && <p className="mt-1 text-xs text-red-600">
                    {errors.workExperience[index]?.position?.message}
                  </p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input {...register(`workExperience.${index}.location`)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="New York, NY" />
              </div>
              <div className="flex items-center mt-6">
                <input type="checkbox" id={`current-job-${index}`} {...register(`workExperience.${index}.current`)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor={`current-job-${index}`} className="ml-2 block text-sm text-gray-700">
                  I currently work here
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input type="month" {...register(`workExperience.${index}.startDate`)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input type="month" {...register(`workExperience.${index}.endDate`)} disabled={watch(`workExperience.${index}.current`)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-500" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea {...register(`workExperience.${index}.description`)} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe your responsibilities and achievements..."></textarea>
              </div>
            </div>
          </div>)}
        <button type="button" onClick={addWorkExperience} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
          <PlusIcon className="h-4 w-4 mr-1" /> Add Work Experience
        </button>
      </section>
      {/* Projects */}
      <section>
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Projects & Achievements
        </h3>
        {watchProjects.map((project, index) => <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-md font-medium">Project #{index + 1}</h4>
              {watchProjects.length > 1 && <button type="button" onClick={() => removeProject(index)} className="p-1 text-red-500 hover:bg-red-50 rounded-full">
                  <TrashIcon className="h-4 w-4" />
                </button>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Name
                </label>
                <input {...register(`projects.${index}.name`, {
              required: 'Project name is required'
            })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="E-commerce Platform" />
                {errors.projects?.[index]?.name && <p className="mt-1 text-xs text-red-600">
                    {errors.projects[index]?.name?.message}
                  </p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Technologies Used
                </label>
                <input {...register(`projects.${index}.technologies`)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="React, Node.js, MongoDB" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Link
                </label>
                <input {...register(`projects.${index}.link`)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://github.com/username/project" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea {...register(`projects.${index}.description`)} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe the project and your contribution..."></textarea>
              </div>
            </div>
          </div>)}
        <button type="button" onClick={addProject} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
          <PlusIcon className="h-4 w-4 mr-1" /> Add Project
        </button>
      </section>
      {/* Submit Button */}
      <div className="pt-4">
        <button type="submit" className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Create Resume
        </button>
      </div>
    </form>;
}