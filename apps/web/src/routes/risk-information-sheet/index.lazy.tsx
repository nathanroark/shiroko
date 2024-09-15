import { createLazyFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle, Separator } from '@ui'

export const Route = createLazyFileRoute('/risk-information-sheet/')({
  component: () => (
    <RiskInfoSheet
      riskId="N95-4-20"
      date="09/15/24"
      prob="40%"
      impact="marginal" // 3
      description="End users may resist the SafeHome system. This might be from concerns over complexity, changes in routine, data privacy issues, or distrust in the technology’s reliability."
      refinementContext={[
        'Users might find the system interface too complex or unintuitive, leading to frustration and reluctance to use the system regularly. This could stem from unfamiliar design or lack in quality of documentation.',
        'Users may be concerned about the security and privacy of their personal data. Without clear communication about how data is handled and protected, users might resist using the system.',
        'Users could be resistant to changing their routines or adopting new technology. They may tend to perfer traditional security methods over any new system.',
        'Users may have a general distrust in the reliability of technology. This may lead to them not want to adopt the system over fear of it actually worsening their security or quality of life.'
      ]}
      mitigationMonitoring={
        [
          // TODO: Write these out
          // 'Invest in UX research to simplify the interface and make it more intuitive, with a focus on common tasks that users are expected to perform.',
          // 'Develop comprehensive training materials, including step-by-step guides, video tutorials, and FAQs. Conduct webinars or live training sessions to engage users directly.',
          // 'Implement a feedback loop where users can easily report issues or suggestions directly through the app. Regularly review and address common concerns.',
          // 'Clearly communicate the security measures in place to protect user data, including data encryption, access controls, and privacy policies. Include this information in onboarding materials.'
        ]
      }
      managementContingencyPlan={{
        plan: '',
        trigger: ''
        // plan: 'If feedback indicates more than 30% of users are dissatisfied or resistant, initiate an intensive support phase. This includes one-on-one onboarding sessions, enhanced customer support availability, and the introduction of incentives (e.g., discounts, extended warranties) to encourage adoption.',
        // trigger:
        //   'The contingency plan will be activated if the negative feedback threshold is met within the first month of the system launch or if there is a noticeable decline in system engagement metrics (e.g., daily active users dropping below 50% of initial adopters).'
      }}
      currentStatus="09/15/24: Risk identified."
      originator="N. Roark"
      assigned="K. Preston"
    />
  )
})

interface RiskInfoSheetProps {
  riskId: string
  date: string
  prob: string
  impact: string
  description: string
  refinementContext: string[]
  mitigationMonitoring: string[]
  managementContingencyPlan: {
    plan: string
    trigger: string
  }
  currentStatus: string
  originator: string
  assigned: string
}

function RiskInfoSheet({
  riskId,
  date,
  prob,
  impact,
  description,
  refinementContext,
  mitigationMonitoring,
  managementContingencyPlan,
  currentStatus,
  originator,
  assigned
}: RiskInfoSheetProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Risk information sheet
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-4 gap-2 text-sm">
          <div className="border border-border p-2 rounded-md">
            <strong>Risk ID:</strong> {riskId}
          </div>
          <div className="border border-border p-2 rounded-md">
            <strong>Date:</strong> {date}
          </div>
          <div className="border border-border p-2 rounded-md">
            <strong>Prob:</strong> {prob}
          </div>
          <div className="border border-border p-2 rounded-md">
            <strong>Impact:</strong> {impact}
          </div>
        </div>

        <div className="space-y-2">
          <strong>Description:</strong>
          <p className="text-sm">{description}</p>
        </div>

        <Separator />

        <div className="space-y-2">
          <strong>Refinement/context:</strong>
          {refinementContext.map((item, index) => (
            <div key={'refinementContext' + index} className="flex flex-row">
              <div className="text-sm w-[15%]">Subcondition {index + 1}: </div>
              <div className="text-sm w-full">{item}</div>
            </div>
          ))}
        </div>

        <Separator />

        <div className="space-y-2">
          <strong>Mitigation/monitoring:</strong>
          <ol className="list-decimal list-inside text-sm">
            {mitigationMonitoring.map((item, index) => (
              <li
                key={'mitigationMonitoring' + index}
                className="flex flex-row"
              >
                <div className="text-sm w-[3%]">{index + 1}. </div>
                <div className="text-sm w-full">{item}</div>
              </li>
            ))}
          </ol>
        </div>

        <Separator />

        <div className="space-y-2">
          <strong>Management/contingency plan/trigger:</strong>
          <p className="text-sm">{managementContingencyPlan.plan}</p>
          <p className="text-sm">
            <strong>Trigger:</strong> {managementContingencyPlan.trigger}
          </p>
        </div>

        <Separator />

        <div className="space-y-2">
          <strong>Current status:</strong>
          <p className="text-sm">{currentStatus}</p>
        </div>

        <Separator />

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="border border-border p-2 rounded-md">
            <strong>Originator:</strong> {originator}
          </div>
          <div className="border border-border p-2 rounded-md">
            <strong>Assigned:</strong> {assigned}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
