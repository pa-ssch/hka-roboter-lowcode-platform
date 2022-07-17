namespace VectorSDKMapper.Controllers.Data
{
    public class ImagePreview
    {
        private ImagePreview? _previousImage;
        private string _identifier;
        private object? _parameter;

        public string Image
        {
            get
            {
                return "";

                //TODO: new VectorOnStartupFunctionality(),
                //new VectorWaitFunctionality(),
                //new VectorDriveFunctionality(),
                //new VectorRotateFunctionality(),
                //new VectorGoToChargerFunctionality(),
                //new VectorLeaveChargerFunctionality(),
                //new VectorGoToCubeFunctionality(),
                //new VectorLiftArmsFunctionality(),
                //new VectorLowerArmsFunctionality(),

                //  würfel dabei oder nicht, ladestation, drehen (pfeil),  laufen
            }
        }

        public int DisplayDuration { get; }


        public ImagePreview(string identifier, object? parameter, ImagePreview? previousImage = null)
        {
            _identifier = identifier;
            _parameter = parameter;
            _previousImage = previousImage;
        }

    }
}