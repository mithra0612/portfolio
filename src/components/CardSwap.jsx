import CardSwap, { Card } from './ui/card-swap';

const CardSwapComponent = () => (
  <div className="h-[350px] relative">
    <CardSwap
      cardDistance={60}
      verticalDistance={70}
      delay={5000}
      pauseOnHover={false}
    >
      <Card>
        <h3 className="text-lg font-bold">AI-Based Financial Guidance</h3>
        <p className="text-sm">Your content here</p>
      </Card>
      <Card>
                <h3 className="text-lg font-bold pb-2 pl-2">Wellcare</h3>

        <img
          src="/wellcare.png"
          alt="Wellcare"
          className="w-full h-full object-cover rounded-lg"
        />
      </Card>
      <Card>
        <h3 className="text-lg font-bold">Growth Guardian3</h3>
<img
          src="/growth-guardian.png"
          alt="Growth Guardian"
          className="w-full h-full object-cover rounded-lg"
        />
      </Card>
    </CardSwap>
  </div>
);

export default CardSwapComponent;