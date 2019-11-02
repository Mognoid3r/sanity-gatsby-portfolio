export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dbe077870b279a37e78657b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ws9dahwm',
                  apiId: '2c12b95e-c6b2-49d3-9658-33a64246035a'
                },
                {
                  buildHookId: '5dbe0779aa2c1636681767f2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mz1giz2d',
                  apiId: '4c540f20-d1cd-480e-9bee-33507f31be80'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Mognoid3r/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mz1giz2d.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
