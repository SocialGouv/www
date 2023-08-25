import { CallOut } from "@codegouvfr/react-dsfr/CallOut"

export default function CallForIdeas() {
  return (
    <div className="call-for-ideas fr-pb-6w">
      <div className="fr-container">
        <CallOut
          buttonProps={{
            children: "Je soumets mon idée !",
            // onClick: function noRefCheck() {},
          }}
          iconId="ri-information-line"
          title="VOUS AVEZ UNE IDÉE ?"
        >
          Vous êtes témoin d&apos;un problème récurrent que rencontrent les
          citoyens ou les agents publics ? Participez à l&apos;amélioration du
          service public des minitères sociaux en proposant vos de startups
          d&apos;État.
        </CallOut>
      </div>
    </div>
  )
}
