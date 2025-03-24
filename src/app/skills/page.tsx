import React from 'react';
import CommandLine from '@/components/terminal/CommandLine';

/**
 * Skills page component showcasing technical abilities and expertise with icons
 */
export default function SkillsPage() {
  // Skill categories with proficiency levels and icons
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Kotlin", level: 90, icon: "devicon-kotlin-plain" },
        { name: "Java", level: 90, icon: "devicon-java-plain" },
        { name: "Python", level: 85, icon: "devicon-python-plain" },
        { name: "C++", level: 80, icon: "devicon-cplusplus-plain" },
        { name: "C#", level: 75, icon: "devicon-csharp-plain" },
      ]
    },
    {
      name: "Frameworks & Technologies",
      skills: [
        { name: "Android Development", level: 95, icon: "devicon-android-plain" },
        { name: "Android Automotive", level: 90, icon: "devicon-android-plain" },
        { name: "Jetpack Compose", level: 85, icon: "devicon-android-plain" },
        { name: "Unity", level: 70, icon: "devicon-unity-original" },
        { name: "VR/AR", level: 65, icon: "fa-solid fa-vr-cardboard" },
      ]
    },
    {
      name: "Software Development",
      skills: [
        { name: "Software Architecture", level: 85, icon: "fa-solid fa-sitemap" },
        { name: "Git & Version Control", level: 90, icon: "devicon-git-plain" },
        { name: "Testing & QA", level: 80, icon: "fa-solid fa-vial" },
        { name: "CI/CD", level: 75, icon: "fa-solid fa-code-branch" },
        { name: "Agile Development", level: 85, icon: "fa-solid fa-diagram-project" },
      ]
    },
    {
      name: "Data Science & ML",
      skills: [
        { name: "Machine Learning", level: 75, icon: "fa-solid fa-brain" },
        { name: "Data Analysis", level: 80, icon: "fa-solid fa-chart-line" },
        { name: "Statistical Modeling", level: 70, icon: "fa-solid fa-square-root-variable" },
        { name: "Data Visualization", level: 75, icon: "fa-solid fa-chart-pie" },
        { name: "Big Data Technologies", level: 65, icon: "fa-solid fa-database" },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <section className="border border-terminal-dimmed p-4 rounded-md">
        <div className="flex items-center text-sm text-terminal-dimmed mb-2">
          <span>marc@ferrer:~/portfolio/skills$</span>
          <span className="ml-2 animate-pulse">_</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">
          Technical <span className="text-terminal-accent">Skills</span>
        </h1>
        
        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-3">
              <h2 className="text-xl font-bold border-b border-terminal-dimmed pb-1">
                {category.name}
              </h2>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <i className={`${skill.icon} text-terminal-accent mr-2`}></i>
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-terminal-dimmed">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-terminal-dimmed bg-opacity-30 rounded-full h-2">
                      <div 
                        className="bg-terminal-accent h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <CommandLine />
    </div>
  );
}