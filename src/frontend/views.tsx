/** @jsx svg */

import { injectable } from "inversify";
import { VNode } from "snabbdom";
import { IViewArgs, RenderingContext, ShapeView, SLabel } from "sprotty";

@injectable()
export class EdgeArrow extends ShapeView {
  override render(
    node: Readonly<SLabel>,
    context: RenderingContext,
    args?: IViewArgs,
  ): VNode {
    return (
      <polygon points={`-6,-4 0,0 -6,4`} style={{ fill: "black" }}></polygon>
    );
  }
}
