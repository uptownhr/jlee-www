export default {
  title: 'SectionText',
}

export const Default = () => ({
  template: `<SectionText title="Title" heading="Heading of Section" description="Blah blah blah description of the section." />`,
})

export const CurrentWork = () => ({
  template: `<SectionText title="Current Work" heading="New Product Development @ Bambee" description="Working within a newly formed team to tackle Payroll. My primary role
          is to provide architectural support for interfacing with the Core
          platform. Payroll is our first new product that is running as an
          independent service and will be paving the patterns towards
          microservice architecture." 
          />`,
})
