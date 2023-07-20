import { projectConstant } from '@/utility/projectConstant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white mt-10 sm:mt-0">
        <div className="max-w-5xl mx-auto py-12">
          <h2 className="text-4xl border-b-2 border-purple-500 pb-3 font-semibold text-center mb-8">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectConstant.map((project) => (
              <Link
                href={project.link}
                key={project.id}
                className="bg-gray-800 rounded-lg shadow-md"
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  height={200}
                  width={500}
                  className="rounded-t-lg bg-cover bg-center max-h-[200px] "
                />
                <div className="p-6 max-h-[300px]">
                  <h3 className="text-xl font-semibold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 ">{project.description}</p>
                  <div className="flex flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-purple-500 text-gray-200 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Projects